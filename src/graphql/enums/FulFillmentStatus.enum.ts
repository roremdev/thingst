import { gql } from 'apollo-server'

export default {
    Schema: gql`
        enum FulFillmentStatus {
            None
            Preparing
            Delivering
            Fulfilled
        }
    `,
}
