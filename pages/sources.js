import Head from "next/head";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/common/Layout";

export default function Sources() {
  return (
    <Layout>
      <Head>
        <title>News-Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
      </Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
      </Typography>
    </Layout>
  );
}
