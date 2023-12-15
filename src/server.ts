// import { Server } from 'http';
// import app from './app';
// import config from './config';
// import { errorlogger, logger } from './shared/logger';


// async function bootstrap() {

//   const server: Server = app.listen(config.port, () => {
//     logger.info(`Server running on port ${config.port}`);
//   });

  

//   const exitHandler = () => {

//     if (server) {
//       server.close(() => {
//         logger.info('Server closed');
//       });
//     }
//     process.exit(1);
//   };

//   const unexpectedErrorHandler = (error: unknown) => {
//     errorlogger.error(error);
//     exitHandler();
//   };

//   process.on('uncaughtException', unexpectedErrorHandler);
//   process.on('unhandledRejection', unexpectedErrorHandler);

//   process.on('SIGTERM', () => {
//     logger.info('SIGTERM received');
//     if (server) {
//       server.close();
//     }
//   });
// }

// bootstrap();


import mongoose from 'mongoose';
import app from './app';
import config from './config/index';

const { port, database_url } = config;

const run = async () => {
  try {
    // Connect to MongoDB
    
    await mongoose
    .connect(database_url as string)
    .then(() => console.log('database connected successfully'))
    
    console.log('Database connected successfully');

    // Start the Express server
    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    // Handle server shutdown
    const exitHandler = () => {
      if (server) {
        server.close(() => {
          console.log('Server closed');
          process.exit(1);
        });
      }
    };

    // Handle unexpected errors
    const unexpectedErrorHandler = (error: unknown) => {
      console.error(error);
      exitHandler();
    };

    process.on('uncaughtException', unexpectedErrorHandler);
    process.on('unhandledRejection', unexpectedErrorHandler);

    // Handle SIGTERM signal
    process.on('SIGTERM', () => {
      console.log('SIGTERM received');
      exitHandler();
    });
  } catch (error) {
    console.error(error);
  }
};

run().catch((error) => console.error(error));