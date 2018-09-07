import React from 'react'
import { Spin } from 'antd'

import Loadable from 'react-loadable';

const Spinner = () => <Spin size="large" />

export const Login=Loadable({
    loader:()=>import('./Login'),
    loading:Spinner
  })
  export const CompleteProfile=Loadable({
      loader:()=>import('./CompleteProfile'),
      loading:Spinner
    })
