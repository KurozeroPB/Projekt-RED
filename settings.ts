import Settings from "~/interfaces/settings.types";
import pkg from "./package.json";

const env = process.env.NODE_ENV || "development";

const settings: Settings = {
    env,
    version: pkg.version,
    host: env === "development" ? "http://localhost:3000" : "https://vdbroek.dev",
    google: {
        test: env === "development" ? true : false,
        analytics: {
            trackingId: "",
            accountId: "",
            domain: env === "development" ? "http://localhost:3000" : "https://vdbroek.dev"
        }
    },
    sentry: {
        dsn: process.env.DSN",
        // publishRelease: true,
        // attachCommits: true,
        repo: pkg.repository.url,
        config: {
            environment: env
        }
    }
};

export default settings;