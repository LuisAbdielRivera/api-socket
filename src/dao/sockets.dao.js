import Socket from "../models/socket.model.js";

const socketDAO = {};

socketDAO.getAll = async () => {
  const sockets = await Socket.find();
  return sockets;
};

socketDAO.getOne = async (id) => {
  const socket = await Socket.findOne({ id: id });
  return socket;
};

socketDAO.insertSocket = async (socket) => {
  const socketSaved = new Socket(socket);
  socketSaved.save();
  return true;
};

socketDAO.updateSocket = async (id, socket) => {
  const socketUpdated = await Socket.findOneAndUpdate({ id: id }, socket);
  if (socketUpdated != null) {
    return true;
  } else return false;
};

socketDAO.deleteSocket = async (_id) => {
  const socketDeleted = await Socket.findOneAndDelete({ _id: _id });

  console.log(socketDeleted);
  if (socketDeleted != null) {
    return true;
  } else return false;
};

export default socketDAO;
