import { gql } from 'apollo-server'

export default {
    Schema: gql`
        enum PaymentStatus {
            Waiting
            Paid
            Rejected
        }
    `,
}
