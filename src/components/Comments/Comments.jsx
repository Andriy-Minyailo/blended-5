import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
// import { comments } from "../../helpers/comments";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/filterSlice";
import { useGetCommentsQuery } from "../../redux/commentApi";

export const Comments = () => {
  const { data: comments } = useGetCommentsQuery();
  // console.log(data);
  const commentsFilter = useSelector(getFilter);
  const commentRender = comments?.filter(({ content }) =>
    content.toLowerCase().includes(commentsFilter.toLowerCase())
  );
  if (!comments) return;
  return (
    <Grid>
      {comments &&
        commentRender.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
