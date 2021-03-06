import { Literal, Record, Static, String, Union } from 'runtypes';

const NodeEnv = Union(
  Literal('prod'),
  Literal('production'),
  Literal('dev'),
  Literal('development'),
  Literal('test'),
);

const LogLevel = Union(
  Literal('ALL'),
  Literal('INFO'),
  Literal('FATAL'),
  Literal('DEBUG'),
  Literal('ERROR'),
  Literal('WARN'),
  Literal('FINE'),
  Literal('OFF'),
);

export const EnvRunType = Record({
  DATABASE_URL: String,
  JWT_SECRET: String,
  GLOBAL_PREFIX: String,
  RATE_LIMIT: String,
  NODE_ENV: NodeEnv,
  PORT: String,
  LOG_LEVEL: LogLevel,
  JWT_EXPIRES: String,
  COOKIE_MAX_AGE: String,
  TOKEN_LENGTH: String,
  APPLICATION: String,
  GOOGLE_CLIENT: String,
  GOOGLE_SECRET: String,
  GOOGLE_CALLBACK_URL: String,
  FACEBOOK_CLIENT: String,
  FACEBOOK_SECRET: String,
  FACEBOOK_CALLBACK_URL: String,
});

export type EnvRunType = Static<typeof EnvRunType>;

export const defaults = {
  GLOBAL_PREFIX: '',
  LOG_LEVEL: 'INFO',
  JWT_EXPIRES: '15min',
  PORT: '4000',
  RATE_LIMIT: '1000',
  NODE_ENV: 'development',
  APPLICATION: 'CoretecksProject',
  TOKEN_LENGTH: '8',
};
