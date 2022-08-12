const sql = require("./db.js");
// constructor
const Gallerie = function(tutorial) {
  this.title = tutorial.title;
  this.description = tutorial.description;
  this.published = tutorial.published;
};

Gallerie.create = (newGallerie, result) => {
    sql.query("INSERT INTO galerie_site SET ?", newGallerie, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created gallerie: ", { id: res.insertId, ...newGallerie });
      result(null, { id: res.insertId, ...newGallerie });
    });
  };

Gallerie.getAll = (galerie_nom, result) => {
    let query = "SELECT * FROM galerie_site";
    if (galerie_nom) {
      query += ` WHERE galerie_nom LIKE '%${galerie_nom}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("gallerie: ", res);
      result(null, res);
    });
  };

Gallerie.findById = (galerie_id, result) => {
    sql.query(`SELECT * FROM galerie_site WHERE id = ${galerie_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found galerie_id: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found Gallerie with the id
      result({ kind: "not_found" }, null);
    });
  };

