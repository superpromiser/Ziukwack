import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  // background-image: url('/images/header-background.png');
  // background-size: cover;
  // background-position: center;
  height:185px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  text-align: center;

`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <>
     <Hero>
        <Heading as="h1" size="xl" mb="24px" color="primary">
          {TranslateString(576, 'ZabakuSWAP')}
        </Heading>
        <Text>{TranslateString(578, 'The First Automatic Liquidity Acquisition Yield Farm & AMM on Binance Smart Chain.')}</Text>
      </Hero>
    <Page>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
    </>
  )
}

export default Home
