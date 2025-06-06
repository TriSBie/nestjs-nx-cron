import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [PrismaModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver, //use the apollo driver
    autoSchemaFile: true,//generate the schema in the file
  })],
  controllers: [],
  providers: [],
})
export class AppModule { }
