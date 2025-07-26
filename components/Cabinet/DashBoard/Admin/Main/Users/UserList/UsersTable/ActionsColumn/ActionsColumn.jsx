import { useMutation, useQueryClient } from '@tanstack/react-query';
import styles from './ActionsColumn.module.scss';
import { base_url } from '@/helper/consts';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

const banOrDeleteAccount = async ({ token, id, action }) => {
  const link = `${base_url}/admin/user/${action === 'ban' ? 'block' : 'delete'}`;
  const res = await fetch(link, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify({ users: [id] }),
  });
  const parsedData = await res.json();

  if (!res.ok) {
    const message =
      parsedData?.message[0] ||
      parsedData?.message ||
      `Помилка ${action === 'ban' ? 'блокування' : 'видалення'} користувача`;
    throw new Error(message);
  }

  return parsedData;
};

const ActionsColumn = ({ rowData }) => {
  const { banned, toDelete, id } = rowData;
  const queryClient = useQueryClient();

  const { data: token } = useSession();

  const mutation = useMutation({
    mutationFn: ({ action }) => banOrDeleteAccount({ token: token.accessToken, action, id }),
    onSuccess: () => {
      toast.success('Успішно');
      queryClient.invalidateQueries({ queryKey: ['users_list'] });
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => mutation.mutate({ action: 'ban' })}
        className={styles.button}
        disabled={mutation.isPending}
      >
        {banned ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96.108 122.88"
            className={styles.icon}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.892,56.036h8.959v-1.075V37.117c0-10.205,4.177-19.484,10.898-26.207v-0.009 C29.473,4.177,38.754,0,48.966,0C59.17,0,68.449,4.177,75.173,10.901l0.01,0.009c6.721,6.723,10.898,16.002,10.898,26.207v17.844 v1.075h7.136c1.59,0,2.892,1.302,2.892,2.891v61.062c0,1.589-1.302,2.891-2.892,2.891H2.892c-1.59,0-2.892-1.302-2.892-2.891 V58.927C0,57.338,1.302,56.036,2.892,56.036L2.892,56.036z M26.271,56.036h45.387v-1.075V36.911c0-6.24-2.554-11.917-6.662-16.03 l-0.005,0.004c-4.111-4.114-9.787-6.669-16.025-6.669c-6.241,0-11.917,2.554-16.033,6.665c-4.109,4.113-6.662,9.79-6.662,16.03 v18.051V56.036L26.271,56.036z M49.149,89.448l4.581,21.139l-12.557,0.053l3.685-21.423c-3.431-1.1-5.918-4.315-5.918-8.111 c0-4.701,3.81-8.511,8.513-8.511c4.698,0,8.511,3.81,8.511,8.511C55.964,85.226,53.036,88.663,49.149,89.448L49.149,89.448z"
              fill="#2961e0"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 109.652"
            className={styles.icon}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.585,49.871H54.77V34.054v-0.011h0.009c0.002-9.368,3.828-17.878,9.989-24.042 c6.164-6.163,14.679-9.991,24.051-9.991V0h0.005l0,0h0.012v0.009c9.368,0.002,17.878,3.828,24.042,9.989 c6.164,6.164,9.991,14.679,9.991,24.051h0.012v0.004v15.96v2.403h-2.403h-9.811h-2.404v-2.403V33.868v-0.009h0.012 c-0.002-5.332-2.195-10.189-5.722-13.715c-3.528-3.531-8.388-5.721-13.724-5.724v0.009h-0.005l0,0h-0.011V14.42 c-5.334,0.002-10.191,2.19-13.72,5.717l0.005,0.005c-3.529,3.528-5.722,8.388-5.722,13.722h0.009v0.005v16.003h13.987 c1.422,0,2.585,1.164,2.585,2.585v54.613c0,1.422-1.163,2.583-2.585,2.583H2.585c-1.424,0-2.585-1.161-2.585-2.583V52.456 C0,51.035,1.161,49.871,2.585,49.871L2.585,49.871z M43.957,79.753l4.098,18.908l-11.232,0.045l3.297-19.162 c-3.068-0.981-5.295-3.857-5.295-7.252c0-4.202,3.411-7.613,7.614-7.613c4.202,0,7.613,3.411,7.613,7.613 C50.053,75.975,47.433,79.048,43.957,79.753L43.957,79.753z"
              fill="#2961e0"
            />
          </svg>
        )}
      </button>
      <button
        onClick={() => mutation.mutate('delete')}
        className={styles.button}
        disabled={mutation.isPending}
      >
        {toDelete ? (
          <svg
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.454 7.50047C12.017 7.50047 15.231 9.13447 17.264 11.7595C16.329 7.89047 12.734 5.00047 8.454 5.00047C7.901 5.00047 7.454 4.55347 7.454 4.00047V2.07747L2.63 6.25147L7.454 10.4635V8.50047C7.454 7.94747 7.901 7.50047 8.454 7.50047ZM18.221 17.0005C17.76 17.0005 17.358 16.6855 17.249 16.2375C16.359 12.5885 13.228 9.95247 9.454 9.55347V10.6745C9.454 11.3805 9.035 12.0095 8.361 12.3145C7.63 12.6475 6.777 12.5275 6.184 12.0105L1.118 7.58647C0.725 7.24247 0.5 6.75547 0.5 6.25047C0.5 5.74547 0.725 5.25847 1.118 4.91447L6.184 0.490471C6.777 -0.0265291 7.63 -0.146529 8.361 0.186471C9.035 0.491471 9.454 1.12047 9.454 1.82647V3.04447C15.078 3.53747 19.5 8.15047 19.5 13.7505C19.5 14.5605 19.396 15.3965 19.192 16.2365C19.084 16.6855 18.683 17.0005 18.221 17.0005Z"
              fill="#2961E0"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 14C8 14.55 7.55 15 7 15C6.45 15 6 14.55 6 14V10C6 9.45 6.45 9 7 9C7.55 9 8 9.45 8 10V14ZM14 14C14 14.55 13.55 15 13 15C12.45 15 12 14.55 12 14V10C12 9.45 12.45 9 13 9C13.55 9 14 9.45 14 10V14ZM16 17C16 17.551 15.552 18 15 18H5C4.448 18 4 17.551 4 17V6H16V17ZM8 2.328C8 2.173 8.214 2 8.5 2H11.5C11.786 2 12 2.173 12 2.328V4H8V2.328ZM19 4H18H14V2.328C14 1.044 12.879 0 11.5 0H8.5C7.121 0 6 1.044 6 2.328V4H2H1C0.45 4 0 4.45 0 5C0 5.55 0.45 6 1 6H2V17C2 18.654 3.346 20 5 20H15C16.654 20 18 18.654 18 17V6H19C19.55 6 20 5.55 20 5C20 4.45 19.55 4 19 4Z"
              fill="#CC3636"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ActionsColumn;
