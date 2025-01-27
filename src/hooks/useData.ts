import usePlatforms from "./usePlatform";

const useData = (id?: number) => {
  const { data: values } = usePlatforms();
  return values?.results.find((value) => value.id === id);
};

export default useData;
