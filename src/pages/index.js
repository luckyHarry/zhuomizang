import * as React from 'react'
import  Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="捉迷藏">
      <h1>欢迎使用捉迷藏,带你快速穿越6千万字正统道藏文本</h1>
      <p>正統道藏洞神部眾術類-黃帝九鼎神丹經訣</p>
      <StaticImage
        alt="正統道藏洞神部眾術類-黃帝九鼎神丹經訣"
        src="../images/正統道藏洞神部眾術類-黃帝九鼎神丹經訣.jpg"
      />
    </Layout>
  )
}



export const Head = () => <Seo title="Home Page"></Seo>


export default IndexPage