import MDEditor from '@uiw/react-md-editor';

const IssueContent = ({ issue }) => {
  return (
    <MDEditor.Markdown source={issue.body} style={{ padding: 32, backgroundColor: '#FAFAFA', color: '#555555' }} />
  );
};

export default IssueContent;
