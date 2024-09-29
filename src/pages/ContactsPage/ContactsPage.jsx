import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import toast, { Toaster } from "react-hot-toast";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      toast.success("Contacts updated...");
    } else if (isError) {
      toast.error("Something went wrong...");
    }
  }, [isLoading, isError]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {isLoading && !isError && (
        <div>
          <Loading />
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      )}
      {isError && !isLoading && (
        <div>
          <Error />
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      )}

      <ContactList />
    </div>
  );
}
