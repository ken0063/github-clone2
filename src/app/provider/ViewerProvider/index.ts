import { useQuery } from '@apollo/client';
import { Viewer } from '../../generated/Viewer';
import { VIEWER_QUERY } from '../queries';

const ViewerProvider = () => {
  const { data, loading } = useQuery<Viewer>(VIEWER_QUERY);
  return {
    data,
    loading,
  };
};

export default ViewerProvider;
