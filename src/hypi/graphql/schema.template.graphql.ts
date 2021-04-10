export const schemaTemplate = `
# Welcome to Hypi’s GraphQL editor
#
# Hypi’s GraphQL editor is our in-browser tool for writing, validating, and
# testing GraphQL schemas.
#
# Remove this comment or write types below it.
#
# For detailed explanation see the documentation at https://docs.hypi.app/reference/graphql
# Lines that starts with a # are comments, these are ignored.
#
# An example GraphQL type might look like:
#
# type Item {
#   slug: String!
#   title: String!
#   description: String
#   start: DateTime
#   end: DateTime
#   due: DateTime
#   comments: [Comment!]
# }
#
# type Comment {
#   content: String!
#   replies: [Comment!]
# }
#

interface Item {
   title: String!
}
`;