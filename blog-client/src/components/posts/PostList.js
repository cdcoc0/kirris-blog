import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import Responsive from "../common/Responsive";

const PostListBlock = styled(Responsive)`
    margin-top: 3rem;
    //margin-left: 0;
`;

const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid ${palette.gray[2]};
    }
    h2 {
        font-size: 2rem;
        margin-top: 0;
        margin-bottom: 0;
        &:hover {
            color: ${palette.gray[6]};
        }
    }
    p {
        margin-top: 2rem;
    }
`;

const SubInfo = styled.div`
    margin-top: 1rem;
    color: ${palette.gray[6]};

    span + span:before {
        color: ${palette.gray[4]};
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        content: '\\B7';
    }
`;

const Tags = styled.div`
    margin-top: 0.5rem;
    .tag {
        display: inline-block;
        color: ${palette.violet[4]};
        text-decoration: none;
        margin-right: 0.5rem;
        &:hover {
            color: ${palette.violet[2]};
        }
    }
`;

const PostItem = () => {
    return (
        <PostItemBlock>
            <h2>title</h2>
            <SubInfo>
                <span>
                    <b>username</b>
                </span>
                <span>{new Date().toLocaleDateString()}</span>
            </SubInfo>
            <Tags>
                <div className="tag">#태그</div>
                <div className="tag">#태그</div>
            </Tags>
            <p>포스트 내용의 일부분...</p>
        </PostItemBlock>
    );
}

const PostList = () => {
    return (
        <PostListBlock>
            <WritePostButtonWrapper>
                <Button violet to="/write">새 글 작성하기</Button>
            </WritePostButtonWrapper>
            <div>
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </PostListBlock>
    );
}

export default PostList;