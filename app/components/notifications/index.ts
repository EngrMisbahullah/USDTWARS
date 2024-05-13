import React from 'react';

const notificationsData = [
  {
    iconSrc: 'https://s3-alpha-sig.figma.com/img/a5cc/0e08/44cba52d8d5ffed4dbe731205649526b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB381m4aMcfBcXqUNVJnIAhPcW7H4creJ83bEL~81crjYEt34tdBYHXlbqzZi-so~ZuPukThWmS44RuCkgnIJleuw1p13Iaqp1IEtw8PJk5-EuLSkm~W5ZHWWOT8rB0nKJZZC9iQOPBwWx34Vohr0k7Sl1E~z-4FIJ-edVBT6phFVys4VAMcWwjXFQP00yo1sV2VUkVKjN2Nn98VLmepMBPtxLbIcjQ0vwS04rOYpCq-OC7WZljpIwFAF9-d0g8Fc~hcxFiutYbbu-rWlViD54ZWhkCX6bRbjlcyKFX-Gl~zmN8rnaVsed6X4Mbjrq9KELmTpCJ6oHh6vWHHhundzw__',
    title: 'Account Verify - Level 1',
    description: 'Your USDTWARS account email has been verified successfully.',
    borderColor: 'border-blue-500',
    
  },
  {
    iconSrc: 'https://s3-alpha-sig.figma.com/img/a5cc/0e08/44cba52d8d5ffed4dbe731205649526b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB381m4aMcfBcXqUNVJnIAhPcW7H4creJ83bEL~81crjYEt34tdBYHXlbqzZi-so~ZuPukThWmS44RuCkgnIJleuw1p13Iaqp1IEtw8PJk5-EuLSkm~W5ZHWWOT8rB0nKJZZC9iQOPBwWx34Vohr0k7Sl1E~z-4FIJ-edVBT6phFVys4VAMcWwjXFQP00yo1sV2VUkVKjN2Nn98VLmepMBPtxLbIcjQ0vwS04rOYpCq-OC7WZljpIwFAF9-d0g8Fc~hcxFiutYbbu-rWlViD54ZWhkCX6bRbjlcyKFX-Gl~zmN8rnaVsed6X4Mbjrq9KELmTpCJ6oHh6vWHHhundzw__',
    title: 'Account Verify - Level 2',
    description: 'Your USDTWARS account email has been verified successfully.',
    borderColor: 'border-blue-500',
  },
  {
    iconSrc: 'https://s3-alpha-sig.figma.com/img/a5cc/0e08/44cba52d8d5ffed4dbe731205649526b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB381m4aMcfBcXqUNVJnIAhPcW7H4creJ83bEL~81crjYEt34tdBYHXlbqzZi-so~ZuPukThWmS44RuCkgnIJleuw1p13Iaqp1IEtw8PJk5-EuLSkm~W5ZHWWOT8rB0nKJZZC9iQOPBwWx34Vohr0k7Sl1E~z-4FIJ-edVBT6phFVys4VAMcWwjXFQP00yo1sV2VUkVKjN2Nn98VLmepMBPtxLbIcjQ0vwS04rOYpCq-OC7WZljpIwFAF9-d0g8Fc~hcxFiutYbbu-rWlViD54ZWhkCX6bRbjlcyKFX-Gl~zmN8rnaVsed6X4Mbjrq9KELmTpCJ6oHh6vWHHhundzw__',
    title: 'Welcome to USDTWARS',
    description: 'Welcome Username!',
    borderColor: 'border-blue-500',
  },
  {
    iconSrc: 'https://s3-alpha-sig.figma.com/img/a5cc/0e08/44cba52d8d5ffed4dbe731205649526b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB381m4aMcfBcXqUNVJnIAhPcW7H4creJ83bEL~81crjYEt34tdBYHXlbqzZi-so~ZuPukThWmS44RuCkgnIJleuw1p13Iaqp1IEtw8PJk5-EuLSkm~W5ZHWWOT8rB0nKJZZC9iQOPBwWx34Vohr0k7Sl1E~z-4FIJ-edVBT6phFVys4VAMcWwjXFQP00yo1sV2VUkVKjN2Nn98VLmepMBPtxLbIcjQ0vwS04rOYpCq-OC7WZljpIwFAF9-d0g8Fc~hcxFiutYbbu-rWlViD54ZWhkCX6bRbjlcyKFX-Gl~zmN8rnaVsed6X4Mbjrq9KELmTpCJ6oHh6vWHHhundzw__',
    title: 'Deposit Pending',
    description: 'Your deposit using $10.00 is registered and awaiting confirmation.',
    borderColor: 'border-blue-500',
  },
  {
    iconSrc: 'https://s3-alpha-sig.figma.com/img/a5cc/0e08/44cba52d8d5ffed4dbe731205649526b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB381m4aMcfBcXqUNVJnIAhPcW7H4creJ83bEL~81crjYEt34tdBYHXlbqzZi-so~ZuPukThWmS44RuCkgnIJleuw1p13Iaqp1IEtw8PJk5-EuLSkm~W5ZHWWOT8rB0nKJZZC9iQOPBwWx34Vohr0k7Sl1E~z-4FIJ-edVBT6phFVys4VAMcWwjXFQP00yo1sV2VUkVKjN2Nn98VLmepMBPtxLbIcjQ0vwS04rOYpCq-OC7WZljpIwFAF9-d0g8Fc~hcxFiutYbbu-rWlViD54ZWhkCX6bRbjlcyKFX-Gl~zmN8rnaVsed6X4Mbjrq9KELmTpCJ6oHh6vWHHhundzw__',
    title: 'Deposit Confirmed',
    description: 'Your deposit of $10.00       has been successfully processed..',
    borderColor: 'border-blue-500',
  },
  {
    iconSrc: 'https://s3-alpha-sig.figma.com/img/a5cc/0e08/44cba52d8d5ffed4dbe731205649526b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB381m4aMcfBcXqUNVJnIAhPcW7H4creJ83bEL~81crjYEt34tdBYHXlbqzZi-so~ZuPukThWmS44RuCkgnIJleuw1p13Iaqp1IEtw8PJk5-EuLSkm~W5ZHWWOT8rB0nKJZZC9iQOPBwWx34Vohr0k7Sl1E~z-4FIJ-edVBT6phFVys4VAMcWwjXFQP00yo1sV2VUkVKjN2Nn98VLmepMBPtxLbIcjQ0vwS04rOYpCq-OC7WZljpIwFAF9-d0g8Fc~hcxFiutYbbu-rWlViD54ZWhkCX6bRbjlcyKFX-Gl~zmN8rnaVsed6X4Mbjrq9KELmTpCJ6oHh6vWHHhundzw__',
    title: 'Withdraw Sent',
    description: 'Your withdrawal of $10.00        was sent successfully.',
    borderColor: 'border-blue-500',
  },
  {
    iconSrc: 'https://s3-alpha-sig.figma.com/img/a5cc/0e08/44cba52d8d5ffed4dbe731205649526b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB381m4aMcfBcXqUNVJnIAhPcW7H4creJ83bEL~81crjYEt34tdBYHXlbqzZi-so~ZuPukThWmS44RuCkgnIJleuw1p13Iaqp1IEtw8PJk5-EuLSkm~W5ZHWWOT8rB0nKJZZC9iQOPBwWx34Vohr0k7Sl1E~z-4FIJ-edVBT6phFVys4VAMcWwjXFQP00yo1sV2VUkVKjN2Nn98VLmepMBPtxLbIcjQ0vwS04rOYpCq-OC7WZljpIwFAF9-d0g8Fc~hcxFiutYbbu-rWlViD54ZWhkCX6bRbjlcyKFX-Gl~zmN8rnaVsed6X4Mbjrq9KELmTpCJ6oHh6vWHHhundzw__',
    title: 'Maximum Bet',
    description: '500 is the maximum bet allowed.',
    borderColor: 'border-blue-500',
  },
  {
    iconSrc: 'https://s3-alpha-sig.figma.com/img/a5cc/0e08/44cba52d8d5ffed4dbe731205649526b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB381m4aMcfBcXqUNVJnIAhPcW7H4creJ83bEL~81crjYEt34tdBYHXlbqzZi-so~ZuPukThWmS44RuCkgnIJleuw1p13Iaqp1IEtw8PJk5-EuLSkm~W5ZHWWOT8rB0nKJZZC9iQOPBwWx34Vohr0k7Sl1E~z-4FIJ-edVBT6phFVys4VAMcWwjXFQP00yo1sV2VUkVKjN2Nn98VLmepMBPtxLbIcjQ0vwS04rOYpCq-OC7WZljpIwFAF9-d0g8Fc~hcxFiutYbbu-rWlViD54ZWhkCX6bRbjlcyKFX-Gl~zmN8rnaVsed6X4Mbjrq9KELmTpCJ6oHh6vWHHhundzw__',
    title: 'Rolling Start',
    description: 'You’re in for next round.',
    borderColor: 'border-blue-500',
  },
  {
    iconSrc: 'https://s3-alpha-sig.figma.com/img/a5cc/0e08/44cba52d8d5ffed4dbe731205649526b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB381m4aMcfBcXqUNVJnIAhPcW7H4creJ83bEL~81crjYEt34tdBYHXlbqzZi-so~ZuPukThWmS44RuCkgnIJleuw1p13Iaqp1IEtw8PJk5-EuLSkm~W5ZHWWOT8rB0nKJZZC9iQOPBwWx34Vohr0k7Sl1E~z-4FIJ-edVBT6phFVys4VAMcWwjXFQP00yo1sV2VUkVKjN2Nn98VLmepMBPtxLbIcjQ0vwS04rOYpCq-OC7WZljpIwFAF9-d0g8Fc~hcxFiutYbbu-rWlViD54ZWhkCX6bRbjlcyKFX-Gl~zmN8rnaVsed6X4Mbjrq9KELmTpCJ6oHh6vWHHhundzw__',
    title: 'Jackpot Maxed Out',
    description: 'You’re in for next round.',
    borderColor: 'border-blue-500',
  },
  {
    iconSrc: 'https://s3-alpha-sig.figma.com/img/a5cc/0e08/44cba52d8d5ffed4dbe731205649526b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB381m4aMcfBcXqUNVJnIAhPcW7H4creJ83bEL~81crjYEt34tdBYHXlbqzZi-so~ZuPukThWmS44RuCkgnIJleuw1p13Iaqp1IEtw8PJk5-EuLSkm~W5ZHWWOT8rB0nKJZZC9iQOPBwWx34Vohr0k7Sl1E~z-4FIJ-edVBT6phFVys4VAMcWwjXFQP00yo1sV2VUkVKjN2Nn98VLmepMBPtxLbIcjQ0vwS04rOYpCq-OC7WZljpIwFAF9-d0g8Fc~hcxFiutYbbu-rWlViD54ZWhkCX6bRbjlcyKFX-Gl~zmN8rnaVsed6X4Mbjrq9KELmTpCJ6oHh6vWHHhundzw__',
    title: 'Minimum Bet',
    description: '1 is the minimum bet required.',
    borderColor: 'border-blue-500',
  },
  {
    iconSrc: 'https://s3-alpha-sig.figma.com/img/a5cc/0e08/44cba52d8d5ffed4dbe731205649526b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB381m4aMcfBcXqUNVJnIAhPcW7H4creJ83bEL~81crjYEt34tdBYHXlbqzZi-so~ZuPukThWmS44RuCkgnIJleuw1p13Iaqp1IEtw8PJk5-EuLSkm~W5ZHWWOT8rB0nKJZZC9iQOPBwWx34Vohr0k7Sl1E~z-4FIJ-edVBT6phFVys4VAMcWwjXFQP00yo1sV2VUkVKjN2Nn98VLmepMBPtxLbIcjQ0vwS04rOYpCq-OC7WZljpIwFAF9-d0g8Fc~hcxFiutYbbu-rWlViD54ZWhkCX6bRbjlcyKFX-Gl~zmN8rnaVsed6X4Mbjrq9KELmTpCJ6oHh6vWHHhundzw__',
    title: 'Minimum Bet',
    description: '1 is the minimum bet required.',
    borderColor: 'border-blue-500',
  },
  {
    iconSrc: 'https://s3-alpha-sig.figma.com/img/a5cc/0e08/44cba52d8d5ffed4dbe731205649526b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB381m4aMcfBcXqUNVJnIAhPcW7H4creJ83bEL~81crjYEt34tdBYHXlbqzZi-so~ZuPukThWmS44RuCkgnIJleuw1p13Iaqp1IEtw8PJk5-EuLSkm~W5ZHWWOT8rB0nKJZZC9iQOPBwWx34Vohr0k7Sl1E~z-4FIJ-edVBT6phFVys4VAMcWwjXFQP00yo1sV2VUkVKjN2Nn98VLmepMBPtxLbIcjQ0vwS04rOYpCq-OC7WZljpIwFAF9-d0g8Fc~hcxFiutYbbu-rWlViD54ZWhkCX6bRbjlcyKFX-Gl~zmN8rnaVsed6X4Mbjrq9KELmTpCJ6oHh6vWHHhundzw__',
    title: 'Minimum Bet',
    description: '1 is the minimum bet required.',
    borderColor: 'border-blue-500',
  },
  {
    iconSrc: 'https://s3-alpha-sig.figma.com/img/a5cc/0e08/44cba52d8d5ffed4dbe731205649526b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB381m4aMcfBcXqUNVJnIAhPcW7H4creJ83bEL~81crjYEt34tdBYHXlbqzZi-so~ZuPukThWmS44RuCkgnIJleuw1p13Iaqp1IEtw8PJk5-EuLSkm~W5ZHWWOT8rB0nKJZZC9iQOPBwWx34Vohr0k7Sl1E~z-4FIJ-edVBT6phFVys4VAMcWwjXFQP00yo1sV2VUkVKjN2Nn98VLmepMBPtxLbIcjQ0vwS04rOYpCq-OC7WZljpIwFAF9-d0g8Fc~hcxFiutYbbu-rWlViD54ZWhkCX6bRbjlcyKFX-Gl~zmN8rnaVsed6X4Mbjrq9KELmTpCJ6oHh6vWHHhundzw__',
    title: 'Minimum Bet',
    description: '1 is the minimum bet required.',
    borderColor: 'border-blue-500',
  },
  // Add more notification objects as needed
];

export default notificationsData;

