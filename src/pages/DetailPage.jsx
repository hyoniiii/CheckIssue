import React from 'react';
import DetailFrame from '../components/Detail/DetailFrame';

const DetailPage = () => {
  // const { id } = useParams();
  // const [issue, setIssue] = useState([]);

  // const handleGetIssue = () => {
  //   issueAPI.getIssue(id).then(({ data }) => {
  //     setIssue(data);
  //   });
  // };

  // useEffect(() => {
  //   handleGetIssue();
  // }, []);
  return (
    <div>
      {/* {issue} */}
      <DetailFrame />
    </div>
  );
};

export default DetailPage;
