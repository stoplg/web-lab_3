const express = require("express");
const app     = express();
const path    = require("path");


const data = {
  table: encodeURIComponent(`
  <table id="data-table" cellpadding="10" cellspacing="0">
				<caption>(In percents)</caption>
				<thead>
					<tr>
						<th scope="col">lisp</th>
						<th scope="col">C</th>
						<th scope="col">C++</th>
						<th scope="col">Python</th>
						<th scope="col">C#</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>100</td>
						<td>14.94</td>
						<td>8.34</td>
						<td>5.76</td>
						<td>4.31</td>

					</tr>
				</tbody>
			</table>
  `)
};

app.use(express.static('docs'));

app.get('/',function(req,res){
    res.sendFile(path.resolve('./docs/index.html'));

});

app.get('/data', function (req, res) {
    res.send(data);
    res.end();
});



console.log("Running at localhost 5000");
app.listen(5000);
