import { Boom } from "@hapi/boom";
import { handler } from "@hapi/hapi/lib/cors";
import { db } from "../database";

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: (req, h) => {
        const id = req.params.id;
        const { results } = await db.query(
            'SELECT * FROM Listings WHERE id=?',
            [id],
        );
        const listing = results[0];
        if (!listing) throw Boom.notFound(`Listing does not exist with ${listing.id}`);

        return listing;
    }

}