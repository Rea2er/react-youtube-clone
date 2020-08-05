import React from "react";
import { Form, Image, TextArea } from "semantic-ui-react";
import "./AddComment.scss";

const AddComment = () => {
  return (
    <div className="add-comment">
      <Image
        className="user-image"
        src="http://via.placeholder.com/48x48"
        circular
      />
      <Form>
        <Form.TextArea
          control={TextArea}
          autoHeight
          placeholder="Add a public comment"
        />
      </Form>
    </div>
  );
};

export default AddComment;
