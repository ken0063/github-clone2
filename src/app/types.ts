import { MouseEventHandler } from 'react';
import {
  SearchRepo,
  SearchRepo_search_nodes,
  SearchRepo_search_nodes_Repository,
} from './generated/SearchRepo';
import { SearchUser } from './generated/SearchUser';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export type DropProps = {
  title?: string;
  items?: string;
};

export type HeaderProp = {
  hasProps?: boolean;
};

export type RepoResType = {
  name?: string;
  description?: string;
  language?: string;
  star?: number;
  license?: string;
  date?: Date;
};

export type SearchProp = {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
};

export type SidebarProps = {
  repo?: number;
  user?: number;
};

export type UserResProps = {
  name?: string;
  nickName?: string;
  info?: string;
};

export interface SearchRepoState {
  repoData: SearchRepo;
}

export interface RepoRootState {
  searchRepo: SearchRepoState;
}

export interface SearchUserState {
  userData: SearchUser;
}

export interface UserRootState {
  searchUser: SearchUserState;
}

export interface RepoResults {
  repo: SearchRepo_search_nodes_Repository;
}
