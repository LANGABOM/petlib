import { PrismaClient } from '@prisma/client';
import { GraphQLScalarType, GraphQLList, GraphQLObjectType, GraphQLBoolean, GraphQLFloat, GraphQLInt, GraphQLString } from 'graphql';

const prisma = new PrismaClient();

async function getPrismaSchema() {
  const introspection = await prisma.$introspect();
  const prismaModels = introspection.types.filter((type: { kind: string; }) => type.kind === 'OBJECT');
  return prismaModels;
}

function analyzePrismaModel(model: { fields: any[]; name: any; }) {
    const fields = model.fields.map((field: { name: any; type: any; isList: any; }) => ({
      name: field.name,
      type: mapPrismaTypeToGraphQLType(field.type),
      isList: field.isList
    }));
    // ... other analysis logic
    return { name: model.name, fields };
  }

// Sample custom scalars (adjust if you have others)
const GraphQLJSON = new GraphQLScalarType({ name: 'JSON' }); 
const GraphQLDateTime = new GraphQLScalarType({ name: 'DateTime' });

function mapPrismaTypeToGraphQLType(prismaType: string) {
  const typeMapping :any= {
    Int: GraphQLInt,
    String: GraphQLString,
    Boolean: GraphQLBoolean,
    Float: GraphQLFloat,
    DateTime: GraphQLDateTime, 
    Json: GraphQLJSON,
    // ... Add more Prisma types 
  };

  // 1. Check for direct matches
  if (prismaType in typeMapping) {
    return typeMapping[prismaType];
  }

  // Default (you might want to throw an error for unhandled types)
  return GraphQLString; 
}

export const  createResolvers=(models: any[]) =>{ 
    const resolvers:any = {};
  
    models.forEach((model: { name: string; }) => {
      resolvers[model.name] = {
        // Basic findMany resolver as an example
        [model.name.toLowerCase() + 's']: async () => {
          return await prisma[model.name.toLowerCase()].findMany();
        }
      };
      // Add mutation resolvers in a similar way
    });
  
    console.log(resolvers)
    return resolvers;
  }
  