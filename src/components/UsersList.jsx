import { User } from './User'

export function UsersList({filteredList}) {

    return (
        <div className='flex justify-center gap-2 flex-wrap m-4'>
            {filteredList?.map(user => <User key={user.id} {...user} />)}
        </div>
    )
}
