interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[Console]: ${message}`);
  }
}

class FileLogger implements Logger {
  log(message: string): void {
    console.log(`[File FileSystem]: ${message}`);
  }
}

function executeLog(logger: Logger) {
  logger.log("Application started");
}

executeLog(new ConsoleLogger());
executeLog(new FileLogger());