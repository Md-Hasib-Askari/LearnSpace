#!/bin/sh
set -e

echo "Waiting for PostgreSQL to be ready..."
until pg_isready -h postgres -p 5432 -U ${DB_USER:-postgres} -d ${DB_NAME:-learningplatform}; do
  echo "PostgreSQL not ready yet. Retrying in 2s..."
  sleep 2
done

echo "PostgreSQL is ready. Applying EF Core migrations..."
dotnet LearnSpace.API.dll --run-ef-migrations

echo "Migrations applied. Starting API..."
exec dotnet LearnSpace.API.dll
