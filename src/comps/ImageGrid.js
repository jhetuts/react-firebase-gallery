import React from "react";
import useFireStore from "../hooks/useFireStore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFireStore("images");

  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="image-wrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              src={doc.url}
              alt="Images"
            />
          </motion.div>
        ))}
    </div>
  );
};
export default ImageGrid;
