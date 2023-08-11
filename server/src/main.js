"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const moduleAlias = require("module-alias");
moduleAlias.addAlias('@schemas', __dirname + '/schemas');
moduleAlias.addAlias('@logic', __dirname + '/logic');
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    console.log('mongodb uri:', process.env.MONGODB_URI);
    const corsOrigins = process.env.CORS_ORIGIN.split(',');
    console.log('cors origin:', corsOrigins);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: corsOrigins,
    });
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map