import { useLocation, useParams } from "react-router";
import { useNavigate } from "react-router-dom";

export default function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
      const location = useLocation();
      const navigate = useNavigate();
      const params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
}