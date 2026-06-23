FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY LearnSpace.sln ./
COPY LearnSpace.API/LearnSpace.API.csproj LearnSpace.API/
COPY LearnSpace.Business/LearnSpace.Business.csproj LearnSpace.Business/
COPY LearnSpace.Data/LearnSpace.Data.csproj LearnSpace.Data/
RUN dotnet restore LearnSpace.API/LearnSpace.API.csproj

COPY . .
WORKDIR /src/LearnSpace.API
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:80
EXPOSE 80

ENTRYPOINT ["dotnet", "LearnSpace.API.dll"]
