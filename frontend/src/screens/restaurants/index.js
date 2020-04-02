import React, { Fragment } from 'react';
import ListRestaurants from "../../components/list_restaurants";
import Categories from "../../components/categories";

export default function Restaurants() {
  return (
    <Fragment>
      <Categories />
      <ListRestaurants />
    </Fragment>
  );
}