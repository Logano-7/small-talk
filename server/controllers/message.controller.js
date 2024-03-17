import Convo from "../models/convo.model.js";
import Message from "../models/message.model.js";
// import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const { message } = req.body;
    const senderId = req.user._id;

    let conversation = await Convo.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Convo.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]); // this will run in parallel

    // SOCKET IO FUNCTIONALITY WILL GO HERE
    // const receiverSocketId = getReceiverSocketId(receiverId);
    // if (receiverSocketId) {
    // 	// io.to(<socket_id>).emit() used to send events to specific client
    // 	io.to(receiverSocketId).emit("newMessage", newMessage);
    // }

    res.status(201).json(newMessage);
  } catch (err) {
    console.log("Error in sendMessage Controller: ", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Convo.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (err) {
    console.log("Error in getMessage Controller: ", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
