import { compile } from "ejs";
import socketDAO from "../dao/sockets.dao.js";

export const getAll = (req, res) => {
  socketDAO
    .getAll()
    .then((sockets) => {
      if (sockets != null) {
        res.json({ sockets });
      } else {
        res.json({ status: "Servidor no disponible" });
      }
    })
    .catch((err) => console.log(err));
};

export const getOne = (req, res) => {
  socketDAO
    .getOne(req.params.id)
    .then((socket) => {
      if (socket != null) res.json({ socket });
      else res.json({ status: "Not found" });
    })
    .catch((err) => res.json({ status: "Server unaviable" }));
};

export const insertSocket = (req, res) => {
  socketDAO
    .insertSocket(req.body)
    .then((result) => {
      if (result) res.json({ status: "Saved" });
    })
    .catch((err) => res.json({ status: "Server unaviable" }));
};

export const updateSocket = (req, res) => {
  socketDAO
    .updateSocket(req.params.id, req.body)
    .then((result) => {
      if (result) res.json({ status: "update" });
      else res.json({ status: "Server unaviable" });
    })
    .catch((err) => res.json({ status: "Server unaviable" }));
};

export const deleteSocket = (req, res) => {
  socketDAO
    .deleteSocket(req.params.id)
    .then((result) => {
      if (result) res.json({ status: "delete" });
      else res.json({ status: "Server unaviable" });
    })
    .catch((err) => res.json({ status: "Server unaviable" }));
};
