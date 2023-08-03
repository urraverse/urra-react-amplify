import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Term Life Insurance',
		description: 'Provides coverage for a predetermined amount of time, typically between 1 – 35 years. Death benefit will payout if the policy owner passes away within the term of the policy.',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Return-Of-Premium Term',
		description: 'We offer a compelling Return of Premium (ROP) term insurance policy which returns all contributed premiums if the insured outlives the term period.',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Index Universal Life',
		description: '(IUL) is a permanent policy with flexibility of premium and death benefit. It also features a higher growth potential through index interest crediting. The policy owner has the ability to invest within specified “indexes” (such as the S&P 500 or Nasdaq 100) to increase the chances of larger returns.',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Fixed Indexed Annuity',
		description: 'With a Lifetime Income rider, annuties are meant to guarantee set payments regardless of how long you and your spouse live in retirement. Fixed Indexed Annuities offer guaranteed protection with the growth potential found in the IUL.',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Debt Consolidation',
		description: 'We work with our clients, and their creditors, to reduce their obligation by eliminating their debt(s) at a fraction of the balance they owe. We are all planning for our family\'s future. Unfortunately for many of us, that future is standing in the shadow of overwhelming debt.',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Become an Agent',
		description:
			'Learn why the life insurance industry is the #1 industry to learn about sales, becoming an entrepreneur, and creating wealth. From weekly office trainings, the Quest learning management system, and our network of providers, our agents have unlimited access to world class training and tools as part of our platform.',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];
