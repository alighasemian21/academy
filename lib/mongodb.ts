import { MongoClient, Db, MongoClientOptions } from 'mongodb';

const options: MongoClientOptions = {
  serverApi: {
    version: '1' as const,
    strict: true,
    deprecationErrors: true,
  },
  // Optional: Add connection timeout
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient> | null = null;

function getClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  
  if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local');
  }

  if (clientPromise) {
    return clientPromise;
  }

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }

  return clientPromise;
}

// Export a function that returns the client promise (lazy initialization)
export default getClientPromise;

/**
 * Helper function to get the database instance
 */
export async function getDatabase(): Promise<Db> {
  const client = await getClientPromise();
  const dbName = process.env.MONGODB_DB_NAME || 'academy';
  return client.db(dbName);
}

/**
 * Test MongoDB connection
 */
export async function testConnection(): Promise<boolean> {
  if (!process.env.MONGODB_URI) {
    console.log('⚠️ MongoDB URI not configured');
    return false;
  }
  
  try {
    const client = await getClientPromise();
    await client.db('admin').command({ ping: 1 });
    console.log('✅ Successfully connected to MongoDB!');
    return true;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    return false;
  }
}

