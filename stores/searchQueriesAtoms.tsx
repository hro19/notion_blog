import { atomWithReset } from 'jotai/utils';

type SearchQueries = {
  startMonth?: string | null;
  endMonth?: string | null;
};

const defaultSearchQueries: SearchQueries = {
  startMonth: null,
  endMonth: null,
};

export const searchQueriesAtom =
  atomWithReset<SearchQueries>(defaultSearchQueries);
