import { deleteListingRoute } from "./deleteListing";
import { updateListingRoute } from "./updateListingRoute";
import { createNewListingRoute } from "./createNewListing";
import { getUserListingsRoute } from "./getUserListings";
import { addViewToListingRoute } from "./addViewToListings";
import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";

export default [
    deleteListingRoute,
    updateListingRoute,
    createNewListingRoute,
    getUserListingsRoute,
    addViewToListingRoute,
    getListingRoute,
    getAllListingsRoute,
];
