import {Component} from "react";
import Head from 'next/head'

interface PropsInterface {
  title?: string;
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogUrl?: string;
  t: Function;
  i18n: any
}

class PageHead extends Component<PropsInterface> {
  static async getInitialProps() {
    return { namespacesRequired: ["home"] };
  }

  get title(): string {
    console.log(this.props)
    console.log(this.props.t('appName', {ns: 'home'}))

    return this.props.title || 'appName'
  }

  get description(): string {
    return 'Some site description'
  }

  get ogDescription(): string {
    return this.props.ogDescription || this.description
  }

  get ogUrl(): string {
    return this.props.ogUrl || '/'
  }

  render() {
    return (
      <Head>
        <title>{this.title}</title>
        <meta name="description" content={this.description}/>
        <meta property="og:title" content={this.title}/>
        <meta property="og:description" content={this.ogDescription}/>
        <meta property="og:url" content={this.ogUrl}/>
        <meta property="og:type" content="website"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>);
  }
}

export default PageHead;
