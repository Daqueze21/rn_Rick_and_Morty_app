import {
  CharactersListItem,
  DataLoadingError,
  Dropdown,
  Loader,
} from '@/src/components';
import { genderFilterList, statusFilterList } from '@/src/constants/characters';
import { COLORS } from '@/src/constants/colors';
import { useGetCharactersQuery } from '@/src/services/api';
import { RootState } from '@/src/store';
import {
  appendCharacters,
  resetCharacters,
} from '@/src/store/slices/charactersSlice';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function Index() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({ status: '', gender: '' });

  const dispatch = useDispatch();
  const { charactersList } = useSelector(
    (state: RootState) => state.characters
  );

  const { data, isFetching, isLoading, error } = useGetCharactersQuery({
    page,
    ...filters,
  });

  useEffect(() => {
    if (data) {
      dispatch(appendCharacters(data.results));
    }
  }, [data, dispatch]);

  useEffect(() => {
    setPage(1);
    dispatch(resetCharacters());
  }, [dispatch, filters]);

  const statusFilter = (value: string) => {
    setFilters({ ...filters, status: value });
  };

  const genderFilter = (value: string) => {
    setFilters({ ...filters, gender: value });
  };

  const loadMore = () => {
    if (!isFetching && data?.info.next) {
      setPage((prev) => prev + 1);
    }
  };

  if (error) {
    return (
        <DataLoadingError />
    );
  };

  return (
    <View className=' flex-1 justify-center items-center dark:bg-primary bg-slate-100 px-2'>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          className='pt-14'
          data={charactersList}
          keyExtractor={(character) => character.id.toString()}
          renderItem={({ item }) => <CharactersListItem {...item} />}
          ItemSeparatorComponent={() => <View className='h-4' />}
          ListHeaderComponent={
            <View className='w-full p-3'>
              <Dropdown
                label={'Filter by status'}
                options={statusFilterList}
                selected={filters.status}
                onSelect={statusFilter}
              />
              <Dropdown
                label={'Filter by gender'}
                options={genderFilterList}
                selected={filters.gender}
                onSelect={genderFilter}
              />
            </View>
          }
          onEndReached={loadMore}
          ListFooterComponent={
            <ActivityIndicator size='large' color={COLORS.bgIndigo} />
          }
        />
      )}
    </View>
  );
}
