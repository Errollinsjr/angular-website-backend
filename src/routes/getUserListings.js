import { db } from "../database";

export const getUserListingsRoute = {
    method: 'GET',
    path: '/api/users/{userId}/listings',
    handler: async (resolve, h) => {
        const userId = req.params.userId;

        const { results } = db.query(
            'SELECT * FROM listings WHERE user_id=?',
            [userId],
        );

        return results;
    }

}
