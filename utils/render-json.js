import {Fragment} from 'react';
/**
 * Component render ld+json for SEO support
 * @param {*} props 
 * @returns 
 */
export default function RenderClientDataAsJSON(props){
    const {data, type} = props;
    return(
    <Fragment>
        <script
          type={type}
          dangerouslySetInnerHTML={{
            __html: `${JSON.stringify(data)}`,
          }}
        />
      </Fragment>
    )
}