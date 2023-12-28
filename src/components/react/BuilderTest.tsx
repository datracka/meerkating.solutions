import Builder, { BuilderComponent } from '@builder.io/react';
import { useEffect, useState } from 'react';

const builderAPIpublicKey = import.meta.env.BUILDER_API_PUBLIC_KEY;
const builderModel = import.meta.env.BUILDER_BLOGPOST_MODEL;

Builder.builder.init(builderAPIpublicKey);

const BuilderTest = () => {
    const [builderContentJson, setBuilderContentJson] = useState();

    useEffect(() => { 
      Builder.builder.get(builderModel, { url: location.pathname })
        .promise().then(setBuilderContentJson);
    }, []);

    return <BuilderComponent model="blogpost" content={builderContentJson} />;
}

export default BuilderTest;