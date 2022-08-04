import React from 'react';

import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import { IconFaceBook, IconInstagram, IconTwitter, IconYouTube, Logo } from '@/assets/icons';
import { lowercase, year } from '@/utils';

export function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="primary-bg-color space-y-6">
      <div className="flex flex-col items-center pt-4 text-white gap-2 xl:flex-row xl:gap-8 xl:justify-center ">
        <p className="font-bold">{t`FOLLOW_US_ON_SOCIAL_NETWORKS`}</p>
        <ul className="flex flex-row gap-7 ">
          <li className="w-[23px] hover-social-media">
            <Link href="https://www.facebook.com">
              <a>
                <IconFaceBook />
              </a>
            </Link>
          </li>
          <li className="w-[25px] hover-social-media">
            <Link href="https://www.twitter.com">
              <a>
                <IconTwitter />
              </a>
            </Link>
          </li>
          <li className="w-[22px] hover-social-media">
            <Link href="https://www.instagram.com">
              <a>
                <IconInstagram />
              </a>
            </Link>
          </li>
          <li className="w-[28px] hover-social-media">
            <Link href="https://www.youtube.com">
              <a>
                <IconYouTube />
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 space-y-4 text-white xl:flex-row xl:gap-20 xl:space-y-2 ">
        <div className="self-center ">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className="text-center xl:text-start max-w-[320px] ">
          <h5 className=" uppercase font-bold mb-2">{t`E_SHOP`}</h5>
          <p>
            {t`THE_SCHOOL_OR_CLASSIC_BOUTIQUE_SOLUTION_MAKES_IT_POSSIBLE_HREF_SELL_ALL_TRANSPORT_TICKETS, REGARDLESS_OF_THE_TICKETING_SYSTEM`}
          </p>
        </div>

        <div className="flex flex-col text-center xl:text-start">
          <h5 className="secondary-color uppercase  font-bold mb-2">{t`INFORMATION`}</h5>

          <Link className="dark-grey-text" href={`/${lowercase(t`LEGAL_NOTICE`)}`}>
            <a> {t`LEGAL_NOTICE`}</a>
          </Link>

          <Link className="dark-grey-text" href={`/${lowercase(t`TERMS_OF_SALES`)}`}>
            <a> {t`TERMS_OF_SALES`}</a>
          </Link>

          <Link className="dark-grey-text" href={`/${lowercase(t`OUR_TEAM`)}`}>
            <a> {t`OUR_TEAM`}</a>
          </Link>
        </div>

        <div className="flex flex-col text-center xl:text-start">
          <h5 className="secondary-color uppercase  font-bold mb-2">{t`ASSISTANCE`}</h5>

          <Link className="dark-grey-text" href={`/${lowercase(t`MY_ACCOUNT`)}`}>
            <a> {t`MY_ACCOUNT`}</a>
          </Link>

          <Link className="dark-grey-text" href={`/${lowercase(t`BECOME_A_SELLER`)}`}>
            <a>{t`BECOME_A_SELLER`}</a>
          </Link>

          <Link className="dark-grey-text" href={`/${lowercase(t`CONTACT_US`)}`}>
            <a> {t`CONTACT_US`}</a>
          </Link>
        </div>
      </div>

      <div className=" text-[0.8rem] text-white px-[14px] pb-2 before:block before:w-full before:h-px before:m-auhref before:mb-2 before:bg-white text-center tracking-widest">
        <p>
          © {year} {t`COPYRIGHT`} Airweb
        </p>
      </div>
    </footer>
  );
}
