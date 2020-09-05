import { createDataService } from "..";
import * as models from "../models";

const entities = [
  {
    id: "b73e3670-daf6-11ea-87d0-0242ac130003",
    name: "Customer",
    displayName: "Customer",
    pluralDisplayName: "Customers",
    isPersistent: true,
    allowFeedback: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    appId: "6233b158-a2d4-4c9f-a9e4-f024d543fe6b",
    fields: [
      {
        id: "b73e3670-daf6-11ea-87d0-0242ac130003",
        fieldPermanentId: "ckenzw8p8040104jntevzdw5f",
        name: "id",
        displayName: "Id",
        dataType: models.EnumDataType.Id,
        properties: {},
        required: true,
        unique: true,
        searchable: false,
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "b73e3670-daf6-11ea-87d0-0242ac130003",
        fieldPermanentId: "ckenzw8p8040104jntevzdw5f",
        name: "createdAt",
        displayName: "Created At",
        dataType: models.EnumDataType.CreatedAt,
        properties: {},
        required: true,
        unique: false,
        searchable: false,
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "b73e3670-daf6-11ea-87d0-0242ac130003",
        fieldPermanentId: "ckenzw8p8040104jntevzdw5f",
        name: "updatedAt",
        displayName: "Updated At",
        dataType: models.EnumDataType.UpdatedAt,
        properties: {},
        required: true,
        unique: false,
        searchable: false,
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "b73e3670-daf6-11ea-87d0-0242ac130003",
        fieldPermanentId: "ckenzw8p8040104jntevzdw5f",
        name: "email",
        displayName: "Email",
        dataType: models.EnumDataType.Email,
        properties: {},
        required: true,
        unique: false,
        searchable: false,
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "b73e3670-daf6-11ea-87d0-0242ac130003",
        fieldPermanentId: "ckenzw8p8040104jntevzdw5f",
        name: "firstName",
        displayName: "First Name",
        dataType: models.EnumDataType.SingleLineText,
        properties: {},
        required: true,
        unique: false,
        searchable: false,
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "b73e3670-daf6-11ea-87d0-0242ac130003",
        fieldPermanentId: "ckenzw8p8040104jntevzdw5f",
        name: "lastName",
        displayName: "Last Name",
        dataType: models.EnumDataType.SingleLineText,
        properties: {},
        required: true,
        unique: false,
        searchable: false,
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
];

describe("createDataService", () => {
  test("creates app as expected", async () => {
    const modules = await createDataService(entities);
    const pathToCode = Object.fromEntries(
      modules.map((module) => [module.path, module.code])
    );
    expect(pathToCode).toMatchSnapshot();
  });
});
