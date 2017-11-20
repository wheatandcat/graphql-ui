// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import Page from "./"

storiesOf("Page", module)
  .addDecorator(withKnobs)
  .add("Page", () => (
    <Page
      endpoint='http://localhost:8080/graphql'
      queries={[
        {
          args: [
            {
              name: "id",
              type: {
                name: "Int"
              }
            }
          ],
          description: "find contribution",
          name: "contribution",
          type: {
            fields: [
              {
                description: "created date",
                name: "createdAt",
                type: {
                  name: "String"
                }
              },
              {
                description: "delete date",
                name: "deletedAt",
                type: {
                  name: "String"
                }
              },
              {
                description: "id",
                name: "id",
                type: {
                  name: "Int"
                }
              },
              {
                description: "title",
                name: "title",
                type: {
                  name: "String"
                }
              },
              {
                description: "update date",
                name: "updatedAt",
                type: {
                  name: "String"
                }
              },
              {
                description: "user id",
                name: "userId",
                type: {
                  name: "Int"
                }
              },
              {
                description: "view status 0 ore 1",
                name: "viewStatus",
                type: {
                  name: "Int"
                }
              }
            ],
            name: "Contribution",
            ofType: null
          }
        },
        {
          args: [
            {
              name: "first",
              type: {
                name: "Int"
              }
            }
          ],
          description: "contribution list",
          name: "contributionList",
          type: {
            fields: null,
            name: null,
            ofType: {
              fields: [
                {
                  description: "created date",
                  name: "createdAt",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "delete date",
                  name: "deletedAt",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "id",
                  name: "id",
                  type: {
                    name: "Int"
                  }
                },
                {
                  description: "title",
                  name: "title",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "update date",
                  name: "updatedAt",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "user id",
                  name: "userId",
                  type: {
                    name: "Int"
                  }
                },
                {
                  description: "view status 0 ore 1",
                  name: "viewStatus",
                  type: {
                    name: "Int"
                  }
                }
              ],
              name: "Contribution"
            }
          }
        },
        {
          args: [
            {
              name: "first",
              type: {
                name: "Int"
              }
            }
          ],
          description: "proble list",
          name: "problemList",
          type: {
            fields: null,
            name: null,
            ofType: {
              fields: [
                {
                  description: "created date",
                  name: "createdAt",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "delete date",
                  name: "deletedAt",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "id",
                  name: "id",
                  type: {
                    name: "Int"
                  }
                },
                {
                  description: "title",
                  name: "title",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "type",
                  name: "type",
                  type: {
                    name: "Int"
                  }
                },
                {
                  description: "update date",
                  name: "updatedAt",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "contribution id",
                  name: "userContributionId",
                  type: {
                    name: "Int"
                  }
                },
                {
                  description: "user id",
                  name: "userId",
                  type: {
                    name: "Int"
                  }
                }
              ],
              name: "Contribution"
            }
          }
        },
        {
          args: [
            {
              name: "first",
              type: {
                name: "Int"
              }
            }
          ],
          description: "question list",
          name: "questionList",
          type: {
            fields: null,
            name: null,
            ofType: {
              fields: [
                {
                  description: "body",
                  name: "body",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "created date",
                  name: "createdAt",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "delete date",
                  name: "deletedAt",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "email",
                  name: "email",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "id",
                  name: "id",
                  type: {
                    name: "Int"
                  }
                },
                {
                  description: "update date",
                  name: "updatedAt",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "user id",
                  name: "userId",
                  type: {
                    name: "Int"
                  }
                }
              ],
              name: "Contribution"
            }
          }
        },
        {
          args: [
            {
              name: "id",
              type: {
                name: "Int"
              }
            }
          ],
          description: "find user",
          name: "user",
          type: {
            fields: [
              {
                description: "created date",
                name: "createdAt",
                type: {
                  name: "String"
                }
              },
              {
                description: "delete date",
                name: "deletedAt",
                type: {
                  name: "String"
                }
              },
              {
                description: "email",
                name: "email",
                type: {
                  name: "String"
                }
              },
              {
                description: "id",
                name: "id",
                type: {
                  name: "Int"
                }
              },
              {
                description: "name",
                name: "name",
                type: {
                  name: "String"
                }
              },
              {
                description: "profile image id",
                name: "profileImageId",
                type: {
                  name: "Int"
                }
              },
              {
                description: "update date",
                name: "updatedAt",
                type: {
                  name: "String"
                }
              }
            ],
            name: "User",
            ofType: null
          }
        },
        {
          args: [
            {
              name: "first",
              type: {
                name: "Int"
              }
            }
          ],
          description: "user list",
          name: "userList",
          type: {
            fields: null,
            name: null,
            ofType: {
              fields: [
                {
                  description: "created date",
                  name: "createdAt",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "delete date",
                  name: "deletedAt",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "email",
                  name: "email",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "id",
                  name: "id",
                  type: {
                    name: "Int"
                  }
                },
                {
                  description: "name",
                  name: "name",
                  type: {
                    name: "String"
                  }
                },
                {
                  description: "profile image id",
                  name: "profileImageId",
                  type: {
                    name: "Int"
                  }
                },
                {
                  description: "update date",
                  name: "updatedAt",
                  type: {
                    name: "String"
                  }
                }
              ],
              name: "User"
            }
          }
        }
      ]}
      mutations={[
        {
          args: [
            {
              description: "contribution id",
              name: "id",
              type: {
                name: "Int"
              }
            }
          ],
          description: "Update existing todo, mark it done or not done",
          name: "hideContribution",
          type: {
            fields: [
              {
                description: "id",
                name: "id",
                type: {
                  name: "Int"
                }
              }
            ],
            name: "Hide",
            ofType: null
          }
        },
        {
          args: [
            {
              description: "contribution id",
              name: "id",
              type: {
                name: "Int"
              }
            }
          ],
          description: "Update existing todo, mark it done or not done",
          name: "showContribution",
          type: {
            fields: [
              {
                description: "id",
                name: "id",
                type: {
                  name: "Int"
                }
              }
            ],
            name: "Hide",
            ofType: null
          }
        }
      ]}
    />
  ))
