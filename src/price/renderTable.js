import $ from 'jquery';
import _ from 'lodash';

import './table.sass';

const compileTable = _.template(
`
<div class="price-block">
  <h5 class="price-block__header"> <%= table.header %> </h5>
  <h6 class="price-block__subheader"> <%= table.subheader %> </h6>
  <table class="price-table">
    <thead>
       <tr>
          <% _.forEach(table.tableHead, function(headItem){ %>
            <td> <%= headItem %> </td>
          <% }); %>
       </tr>
    </thead>
    <tbody>
        <% _.forEach(table.tableRows, function(row){ %>
            <tr>
              <% if(row.realEstateType){ %>
                <td class="price-table__color-row" rowspan="<%= row.rowspan %>">
                  <%= row.realEstateType %>
                </td>
              <% } %>
              <% if(table.tableRows[0].realEstateType){ %>
                <td>
              <% } else { %>
                <td class="price-table__color-row">
              <% } %>
                <%= row.repairType %>
              </td>
              <td>
                <%= decreaseAndWrapWithBold(row.price) %>
              </td>
              <td>
                <%= decreaseAndWrapWithBold(row.materialCost) %>
              </td>
              <td>
                <%= decreaseAndWrapWithBold(row.totalPrice) %>
              </td>
            </tr>
        <% }); %>
    </tbody>
  </table>
</div>
` );

export default compileTable;
