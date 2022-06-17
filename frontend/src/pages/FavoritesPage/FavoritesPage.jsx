import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import FavoriteList from "../../components/Favorite List/FavoriteList";
import Link from "@material-ui/core/Link";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

//THIS WILL HOLD THE FAVORITE NAMES.  EACH NAME WILL ACT AS A LINK TO THE REVIEWS
const FavoritesPage = () => {{
    return(
    <div>
    <table>
  <tr>
    <th>Gym Name</th>

  </tr>
  <tr>
    <td>Gym</td>

  </tr>
  […]
</table>
    </div>
)}};


export default FavoritesPage;
