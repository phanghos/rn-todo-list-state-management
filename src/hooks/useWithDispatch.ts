import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

const useWithDispatch = <Type extends string, Payload>(
  fn: ActionCreatorWithPayload<Payload, Type>,
) => {
  const dispatch = useDispatch();

  return useCallback(
    (payload: Payload) => dispatch(fn(payload)),
    [dispatch, fn],
  );
};

export default useWithDispatch;
