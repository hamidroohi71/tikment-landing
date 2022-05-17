import React from "react";

interface Props {
  comment: any;
}

export default function Comment(props: Props) {
  const { comment } = props;
  return (
    <section>
      <div>
        <img src={comment.photo} alt={comment.author} />
        <p>{comment.author}</p>
      </div>
      <p>{comment.comment}</p>
    </section>
  );
}
